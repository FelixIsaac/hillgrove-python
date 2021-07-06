import { getToken } from '../contexts/UserContext';

interface ISession {
    last_session: string;
    last_topic: string;
}

type UpdateProgressFunc = (session: string, topic: string) => Promise<boolean>;
type GetProgressFunc = (session?: string) => ISession | ISession[];

interface IProgress {
    sessions: ISession[];
    updateProgress: UpdateProgressFunc;
    getProgress: GetProgressFunc;
}

export const updateProgress: UpdateProgressFunc = async (session, topic) => {
    const localSession = JSON.parse(localStorage.getItem('session') || '{"sessions":[]}');
    const updatedSessions = localSession.sessions.filter(({ last_session }: ISession) => last_session !== session)
       
    updatedSessions.push({
        last_session: session,
        last_topic: topic
    })
    
    localStorage.setItem('session', JSON.stringify({
        sessions: updatedSessions
    }));

    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/users/progress`, {
        method: 'POST',
        headers: {
            'Authorization': getToken() || '',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            last_session: session,
            last_topic: topic
        })
    });

    if (!response.ok) {
        throw response;
    }

    return true;
}

export const getProgress: GetProgressFunc = (session) => {
    const localSession = JSON.parse(localStorage.getItem('session') || '{"sessions":[]}');
    
    if (session) {
        const results = localSession.filter(({ last_session }: ISession) => last_session === session);
        
        if (results.length) return results[0];
        else return {}
    }

    return localSession.sessions;
}

export const initProgress: IProgress = {
    sessions: [{
        last_session: "",
        last_topic: ""
    }],
    updateProgress,
    getProgress
};

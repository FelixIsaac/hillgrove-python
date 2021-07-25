import React from 'react';
import StatusPage from '../components/StatusPage';

interface IProps {
    hasError: boolean;
    error: string;
    errorInfo: string;
}

class ErrorBoundary extends React.Component<any, IProps> {
    constructor(props: any) {
        super(props);

        this.state = {
            hasError: false,
            error: '',
            errorInfo: ''
        };
    }

    static getDerivedStateFromError(error: string) {
        // Update state so the next render will show the fallback UI.
        console.info('meow meow')
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.info('meow',error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <StatusPage
                    status="Website error"
                    message={this.state.error}
                    description={this.state.errorInfo}
                />
            )
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;

import React, { useState } from 'react';
import { AspectRatio } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';

const VideoPlayer = ({ src, title }) => {
    const [loading, setLoading] = useState(true)

    return (
        <>
            {
                loading && (
                    <AspectRatio margin="16px 0" maxW="864px" ratio={16 / 9}>
                        <Skeleton height="100%" />
                    </AspectRatio>
                )
            }
            <AspectRatio margin="16px 0" maxW="864px" ratio={16 / 9}>
                <iframe
                    src={src}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onLoad={() => setLoading(false)}
                    hidden={loading}
                />
            </AspectRatio>
        </>
    )
}

export default VideoPlayer

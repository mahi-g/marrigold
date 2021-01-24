import React from 'react';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';

/**
 * Loader graphic from https://github.com/SamHerbert/SVG-Loaders
 */
const Loading = () => {
    const { colorMap, size } = useTheme();
    return (
        <svg
            width={105}
            height={105}
            fill={colorMap.orange}
            css={css`
                margin: ${size.default} auto;
                display: block;
                transform: scale(0.5);
            `}
        >
            <circle cx={12.5} cy={12.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="0s"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={12.5} cy={52.5} r={12.5} fillOpacity={0.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="100ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={52.5} cy={12.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="300ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={52.5} cy={52.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="600ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={92.5} cy={12.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="800ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={92.5} cy={52.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="400ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={12.5} cy={92.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="700ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={52.5} cy={92.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="500ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx={92.5} cy={92.5} r={12.5}>
                <animate
                    attributeName="fill-opacity"
                    begin="200ms"
                    dur="1s"
                    values="1;.2;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
};

export default Loading;

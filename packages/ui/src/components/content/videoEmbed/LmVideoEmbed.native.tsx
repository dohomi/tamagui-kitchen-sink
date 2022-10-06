import {WebView} from 'react-native-webview';
import {useState} from "react";
import {LmVideoEmbedProps} from "./videoEmbedTypes";


export function LmVideoEmbed({youtubeId = 'JxS5E-kZc2s', height = 250, ratio = 16 / 9}: LmVideoEmbedProps) {
    const [state, setState] = useState<any>()
    return (
        <WebView
            source={{
                uri: `https://www.youtube-nocookie.com/embed/${youtubeId}?controls=1`,
            }}
            style={{height: height, width: height * ratio}}
            androidLayerType={'hardware'}
            allowsFullscreenVideo={true}
            mediaPlaybackRequiresUserAction
            useNativeResumeAndPauseLifecycleEvents
            javaScriptEnabled
            allowsInlineMediaPlayback
            useWebKit={true}
            originWhitelist={['*']}
            automaticallyAdjustContentInsets
            onError={(e: any) => {
                setState({
                    ...state,
                    error: e.error,
                });
            }}
            onLoadEnd={() =>
                setState({
                    ...state,
                    isReady: true,
                })
            }
        />
    )
}
export const copyToClipboard = (text: string) => {
    try {
        navigator?.clipboard?.writeText?.(text);
    } catch (e) { }
}

export const createRecorder = (filename: string, stream: MediaStream, mimeType: string = 'video/webm') => {
    let recordedChunks: Array<any> = [];

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = function (e) {
        if (e.data.size > 0) {
            recordedChunks.push(e.data);
        }
    };
    mediaRecorder.onstop = function () {
        saveFile(filename, recordedChunks, mimeType);
        recordedChunks = [];
    };
    mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
    return mediaRecorder;
}

export const startRecording = async (filename: string, mimeType: string = 'video/webm') => {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            audio: false,
            video: { mediaSource: "screen" } as any
        });
        const mediaRecorder = createRecorder(filename, stream, mimeType);
        return () => mediaRecorder.stop();
    } catch (e) {
        return () => { };
    }
}

export const saveFile = (filename: string, recordedChunks: any, mimeType: string = 'video/webm') => {

    const blob: any = new Blob(recordedChunks, {
        type: mimeType
    });
    let downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${filename}.webm`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    URL.revokeObjectURL(blob); // clear from memory
    document.body.removeChild(downloadLink);
}

export const openFullscreen = (elem: any) => {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

export const preventDefault = (e: any) => e?.preventDefault?.();
export const noContextMenu = (e: any) => e?.preventDefault?.();

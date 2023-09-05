export const copyToClipboard = (text: string) => {
    try {
        navigator?.clipboard?.writeText?.(text);
    } catch (e) { }
}

export const preventDefault = (e: any) => e?.preventDefault?.();
export const noContextMenu = (e: any) => e?.preventDefault?.();
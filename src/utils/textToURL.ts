const textToURL = (text: string): string => {
    return text.replace(/[\W_]+/g, ' ').replaceAll(' ', '-').toLowerCase()
}

export default textToURL;
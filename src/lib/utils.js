
export function renderRefs (refs, renderWeb = false) {
    const out = []
    if (!refs) {
        return out
    }
    if (renderWeb && refs.web) {
        out.push(`<a href=${fixLink(refs.web)} class="hover:underline">web</a>`)
    }
    if (refs.twitter) {
        out.push(`<a href=${'https://twitter.com/' + refs.twitter} class="hover:underline">twitter</a>`)
    }
    if (refs.bsky) {
        out.push(`<a href=${'https://bsky.app/profile/' + refs.bsky} class="hover:underline">bluesky</a>`)
    }
    if (refs.telegram) {
        out.push(`<a href=${'https://t.me/' + refs.telegram} class="hover:underline">telegram</a>`)
    }
    if (refs.matrix) {
        out.push(`<a href=${'https://matrix.to/#/'+(refs.matrix[0] === "#" ? "" : "@") + refs.matrix} class="hover:underline">matrix</a>`)
    }
    if (refs.mastodon) {
        const [ handle, server ] = refs.mastodon.split('@')
        out.push(`<a href="${`https://elk.zone`}/${server}/@${handle}" class="hover:underline">mastodon</a>`)
    }
    if (refs.signalMe) {
        out.push(`<a href=${refs.signalMe} class="hover:underline">signal</a>`)
    }
    if (refs.github) {
        out.push(`<a href=${refs.github} class="hover:underline">github</a>`)
    }
    return '<span class="opacity-75">'+out.join(', ')+'</span>'
}

export function fixLink (url) {
    if (url.match(/^http/)) return url
    return `https://${url}`
}

export function shuffleArr (array){
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
    return array
}
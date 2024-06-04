
export function renderRefs (refs) {
    const out = []
    if (!refs) {
        return out
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
        const [ server, handle ] = refs.mastodon.split('@')
        out.push(`<a href="${`https://elk.zone`}/${server}/${handle}" class="hover:underline">mastodon</a>`)
    }
    if (refs.signalMe) {
        out.push(`<a href=${refs.signalMe} class="hover:underline">signal</a>`)
    }
    if (refs.github) {
        out.push(`<a href=${refs.github} class="hover:underline">github</a>`)
    }
    return '<span class="opacity-75">'+out.join(', ')+'</span>'
}
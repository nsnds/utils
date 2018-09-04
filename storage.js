// storage

export function storage ({type, name, val}) {
  if (!name || typeof name !== 'string') return
  type = type || 'session'
  if (name && val === undefined) {
    if (type === 'session') {
      let ret = JSON.parse(window.sessionStorage.getItem(`nsnds_${name}`))
      return ret === null ? undefined : ret
    } else {
      let ret = JSON.parse(window.localStorage.getItem(`nsnds_${name}`))
      return ret === null ? undefined : ret
    }
  } else {
    if (type === 'session') {
      window.sessionStorage.setItem(`nsnds_${name}`, JSON.stringify(val))
      return 'ok'
    } else {
      window.localStorage.setItem(`nsnds_${name}`, JSON.stringify(val))
      return 'ok'
    }
  }
}

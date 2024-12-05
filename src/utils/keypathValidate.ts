export function keypathValidate(keypath: string) {
  return !!keypath.match(/^[\u4E00-\u9FA5\w\d\-_][\u4E00-\u9FA5\w\d\-_[\]. ]*$/)
}

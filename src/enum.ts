
enum Status {
  OFFLINE = 0,
  ONLINE
}

function getResult(status:number) {
  if (status === Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else {
    return 'other'
  }
}

console.log(getResult(0), Status[0])
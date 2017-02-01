import {
  ducksExpirationLength,
  repliesExpirationLength,
  userExpirationLength,
} from 'config/constants'

export function formatDuck (text, { name, avatar, uid }) {
  return { text, name, avatar, uid, timestamp: Date.now() }
}

export function formatReply ({ name, uid, avatar }, reply) {
  return { name, reply, uid, avatar, timestamp: Date.now() }
}

export function formatUserInfo (name, avatar, uid) {
  return { name, avatar, uid }
}

export function formatTimestamp (timestamp) {
  const date = new Date(timestamp)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

function getMilliseconds (timestamp) {
  return new Date().getTime() - new Date(timestamp).getTime()
}

export function staleDucks (lastUpdated) {
  return getMilliseconds(lastUpdated) > ducksExpirationLength
}

export function staleReplies (lastUpdated) {
  return getMilliseconds(lastUpdated) > repliesExpirationLength
}

export function staleUser (lastUpdated) {
  return getMilliseconds(lastUpdated) > userExpirationLength
}

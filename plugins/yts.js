let yts = require('yt-search')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `contoh:\n${usedPrefix + command} belajar nodejs`
  let results = await yts(text)
  await m.reply(global.wait)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
๐ *Title :* ${v.title}
๐ป *Url :* ${v.url}
โฐ *Durasi :* ${v.timestamp}
๐ค *Diupload :* ${v.ago}
๐ฅ *View :*${v.views} Penonton

      `.trim()
      case 'channel': return `
โโโฃ โฬฅ-ฬถฬฏอก..ฬทฬดโฝฬถโโโโโโโโโโโโโ
โ *YOUTUBE SEARCH*
โโโโโโโโโโโโโฃ โฬฅ-ฬถฬฏอก..ฬทฬดโฝฬถโฃ โฝฬถ

๐ฎ *Name :* ${v.name}
๐ป *Url :* ${v.url}
๐ฅ *Subscriber :* ${v.subCountLabel} (${v.subCount}) Subscriber
๐ฅ *Video :* ${v.videoCount} video

`.trim()
    }
  }).filter(v => v).join('\nโโโโโโโโโโโโโโโโโโโโโโ\n')
  conn.sendFile(m.chat, 'https://telegra.ph/file/26fab825b2a3cb2b97459.jpg', null, teks, m)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i

module.exports = handler
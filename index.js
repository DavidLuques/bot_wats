const qrcode=require('qrcode-terminal')
const {Client}=require('whatsapp-web.js')

const client = new Client()

client.on('qr',qr=>{
    qrcode.generate(qr,{small:true })
})
client.on('ready',()=>{
    console.log('cliente logueado ')
})
client.on('message',message=>{
    if(message.body==='brando'){
        client.sendMessage(message.from,'se la come')
        client.sendMessage(message.from,'Claudio le ama')
    }
})

client.initialize()
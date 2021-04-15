<template>
  <div class='view peercomp'>
    <header>
      <h1>Your Peer Service, {{state.username}}.  <br>
          <span v-if="peerState.id">Your peerID: {{ peerState.id }}</span>
          <span v-else>Connect to enable Peer Service.</span>
          <button @click="peerMenu_exit" id=back>Hide Peer Service</button>
      </h1>
    </header>
    <div class="chat-box">Pending invitations...</div>
    <footer>
        <button v-if="!peerState.id" @click="peerConn_init" id=ready>Connect to Peer Service</button>
        <button v-else @click="peerConn_disconnect" id=disconnect>Disconnect from the Peer Service</button>
        <form v-if="peerState.id" @submit.prevent="peerConn_invite">
            <input 
            type="text" 
            v-model="inputInvitation" 
            placeholder="Enter a username to send an invitation..." />
            <input 
            type="submit" 
            value="Send" />
        </form>
    </footer>
  </div>
</template>

<script>
// const axios = require('axios').default;
import Peer from 'peerjs';
export default {
  name: 'peercomp',
  props: {
    state: {},
  },
  methods: {
    peerConn_init(){
        this.peerState.me = new Peer({
        host: 'the0thing.herokuapp.com',
        path: '/peerjs/broker',
        port: 80,  // Yes, I am paying for the Twilio STUN servers...
        // REMEMBER TO ERASE THIS BEFORE POSTING ON GITHUB
        config:{ 'iceServers': [{'url': 'stun:global.stun.twilio.com:3478?transport=udp', 'urls': 'stun:global.stun.twilio.com:3478?transport=udp'}, {'url': 'turn:global.turn.twilio.com:3478?transport=udp', 'username': 'aead563a3f21314845e336c9a9301dd4576d48956c075cdf09f723679001e464', 'urls': 'turn:global.turn.twilio.com:3478?transport=udp', 'credential': 'Aif90NIKOSofnkKChbTGFDv5/o+CwoUsphz4y2+MHXw='}, {'url': 'turn:global.turn.twilio.com:3478?transport=tcp', 'username': 'aead563a3f21314845e336c9a9301dd4576d48956c075cdf09f723679001e464', 'urls': 'turn:global.turn.twilio.com:3478?transport=tcp', 'credential': 'Aif90NIKOSofnkKChbTGFDv5/o+CwoUsphz4y2+MHXw='}, {'url': 'turn:global.turn.twilio.com:443?transport=tcp', 'username': 'aead563a3f21314845e336c9a9301dd4576d48956c075cdf09f723679001e464', 'urls': 'turn:global.turn.twilio.com:443?transport=tcp', 'credential': 'Aif90NIKOSofnkKChbTGFDv5/o+CwoUsphz4y2+MHXw='}],
            'sdpSemantics': 'unified-plan' }
        })
        let peerState = this.peerState
        this.peerState.me.on('open', function(id) {
            console.log(id)
            peerState.id = id
        })
    },
    peerMenu_exit(){
        this.$emit('peerMenu_exit')
    },
    peerConn_disconnect(){
        this.peerState.id = ''
        this.peerState.me = ''
    },
    peerConn_invite(){
        console.log(this.inputInvitation, this.peerState.id)
        this.inputInvitation = ''
    }
  },
  data () {
    return {
      peerState: {
        id: '',
        me: ''
      },
      inputInvitation: ''
    }
  }
}
</script>

<style lang="scss" scoped>
* {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.view {
	display: flex;
	justify-content: center;
	min-height: 100vh;
	background-color: #283747;
	
	&.peercomp {
		flex-direction: column;
		.chat-box {
			background-color: #f3f3f3;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
			flex: 1 1 100%;
			padding: 30px;
			.message {
				display: flex;
				margin-bottom: 15px;
				
				.message-inner {
					.username {
						color: #888;
						font-size: 16px;
						margin-bottom: 5px;
						padding-left: 15px;
						padding-right: 15px;
					}
					.content {
						display: inline-block;
						padding: 10px 20px;
						background-color: #283747;
						border-radius: 999px;
						color: #f3f3f3;
						font-size: 18px;
						line-height: 1.2em;
						text-align: left;
					}
				}
				&.current-user {
					margin-top: 30px;
					justify-content: flex-end;
					text-align: right;
					.message-inner {
						max-width: 75%;
						.content {
							color: #f3f3f3;
							font-weight: 600;
							background-color: #de354c;
						}
					}
				}
			}
		}
		header {
			position: sticky;
			top: 0px;
			display: block;
			width: 100%;
			padding: 50px 30px 10px;
			background-color: #283747;
            #back:hover {
					background-color: #ff2f4b;
				}
			#back {
				position: absolute;
				top: 25px;
				right: 15px;
				appearance: none;
				border: none;
				padding: 35px 32px;
				text-align: center;
				text-decoration: none;
				background-color: #de354c;
				color: #FFF;
				font-size: 18px;
				margin-bottom: 10px;
				text-align: right;
				border-radius: 8px;
			}
			h1 {
				color: #FFF;
			}
		}
		footer {
			position: sticky;
			bottom: 0px;
			background-color: #283747;
			padding: 30px;
			box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
            button:hover {
					background-color: #ff2f4b;
				}
            button {
                position: absolute;
				top: 10px;
				appearance: none;
				border: none;
				// outline: none;
				// background: none;
				padding: 10px 15px;
				text-align: center;
				text-decoration: none;
				background-color: #de354c;
				color: #FFF;
				font-size: 18px;
				margin-bottom: 10px;
				text-align: right;
				border-radius: 8px;
            }
            #ready {
				left: 15px;
			}
            #disconnect {
                top: 30px;
				border-radius: 8px 0px 0px 8px;
            }
			form {
				display: flex;
				input[type="text"] {
					flex: 1 1 100%;
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					width: 100%;
					padding: 10px 350px;
					border-radius: 8px 0px 0px 8px;
					
					color: #333;
					font-size: 18px;
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					background-color: #F3F3F3;
					transition: 0.4s;
					&::placeholder {
						color: #888;
						transition: 0.4s;
					}
				}
				input[type="submit"]:hover{
                    background-color: #ff2f4b;
                }
				input[type="submit"] {
					appearance: none;
					border: none;
					outline: none;
					background: none;
					display: block;
					padding: 10px 15px;
					border-radius: 0px 8px 8px 0px;
					background-color: #de354c;
					color: #f3f3f3;
					font-size: 18px;
					font-weight: 700;
				}
			}
		}
	}
}
</style>
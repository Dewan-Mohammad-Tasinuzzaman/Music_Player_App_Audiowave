(function(){"use strict";var e={497:function(e,s,t){var o=t(963),a=t(252);function n(e,s,t,o,n,r){const i=(0,a.up)("MainPlayer");return(0,a.wg)(),(0,a.j4)(i)}const r={class:"main__window d-flex"},i={class:"controlsContainer"},l=["src"];function c(e,s,t,o,n,c){const u=(0,a.up)("SideBar"),g=(0,a.up)("PlayerControls");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(u,{class:"components",onSongPlayed:c.playSong,onControlButtonPressed:e.controlButtonClicked,songs:n.songs},null,8,["onSongPlayed","onControlButtonPressed","songs"]),(0,a._)("div",i,[n.loadedSongs?((0,a.wg)(),(0,a.j4)(g,{key:0,class:"components",songURL:n.playingURL,songName:n.songName,artistName:n.artistName,songLength:n.songLength,coverArt:n.coverArt,songs:n.songs,currentIndex:n.currentIndex,onNextSong:c.playSong,onPreviousSong:c.playSong},null,8,["songURL","songName","artistName","songLength","coverArt","songs","currentIndex","onNextSong","onPreviousSong"])):(0,a.kq)("",!0)]),(0,a._)("img",{class:"backgroundImage",src:`${this.coverArt}`,alt:"BlurredCoverImage"},null,8,l)])}var u=t(577),g=t.p+"img/logo_white_stroke.9785a34b.svg",d=t.p+"img/search_icon.a17acd99.svg";const m={class:"brandbox d-flex"},p=(0,a._)("div",{class:"brandbox__logobox"},[(0,a._)("img",{class:"brandbox__logobox_logo",src:g,alt:"Audiowave Logo"})],-1),h=(0,a._)("h1",{class:"brandbox__name"},[(0,a.Uk)(" Audio"),(0,a._)("span",{class:"brandbox__name_span"},"wave")],-1),_={action:"#",class:"search"},v=(0,a._)("button",{class:"search__button"},[(0,a._)("img",{class:"search__button_icon",src:d,alt:"Search Icon"})],-1),y={class:"sidebarOptions__header"},f={class:"scrollableList"},b={key:0},w={key:1};function B(e,s,t,n,r,i){const l=(0,a.up)("SongItem"),c=(0,a.up)("PlaylistItem");return(0,a.wg)(),(0,a.iD)("nav",{class:(0,u.C_)(["sidebar",{sidebar__collapse:r.collapse}])},[(0,a._)("div",m,[p,h,(0,a._)("button",{class:(0,u.C_)(["sidebar__button",{sidebar__button_position:r.collapse}]),title:"Collapse/Expand Sidebar",onClick:[s[0]||(s[0]=e=>r.collapse=!r.collapse),s[1]||(s[1]=(...e)=>i.changeButtonText&&i.changeButtonText(...e))],style:{opacity:"100% !important"}},(0,u.zw)(r.buttonText),3)]),(0,a._)("form",_,[(0,a.wy)((0,a._)("input",{class:"search__input",type:"text",placeholder:"Search for songs...","onUpdate:modelValue":s[2]||(s[2]=e=>r.searchQuery=e)},null,512),[[o.nr,r.searchQuery]]),v]),(0,a._)("h2",y,[(0,a._)("span",{class:(0,u.C_)(["sidebarOptions__header_1",{sidebarOptions__notSelected:r.optionSelected}]),onClick:s[3]||(s[3]=e=>(r.optionSelected=!r.optionSelected,r.songIsSelected=!0))},"Songs",2),(0,a._)("span",{class:(0,u.C_)(["sidebarOptions__header_2",{sidebarOptions__selected:r.optionSelected}]),onClick:s[4]||(s[4]=e=>(r.optionSelected=!r.optionSelected,r.songIsSelected=!1))},"Playlists",2)]),(0,a._)("div",f,[r.songIsSelected?((0,a.wg)(),(0,a.iD)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.filteredSongs,(e=>((0,a.wg)(),(0,a.j4)(l,{onSongPlayed:i.handleSongPlayed,key:e.id,songname:e.fileName,artistname:e.artist,coverimageSrc:e.albumCover},null,8,["onSongPlayed","songname","artistname","coverimageSrc"])))),128))])):((0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(c)]))])],2)}var P=t(892);const A={class:"songitem"},S={class:"songitem__coverbox"},x=["src"],I={class:"songitem__details"},L={class:"songitem__details_songname"},E={class:"songitem__details_artistname"},C=(0,a._)("img",{class:"songitem__button_icon",src:P,alt:"Play/Pause Icon"},null,-1),D=[C];function k(e,s,t,o,n,r){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("figure",S,[(0,a._)("img",{id:"albumCover",class:"songitem__coverbox_coverimage",src:t.coverimageSrc,alt:"Album Cover Image"},null,8,x)]),(0,a._)("div",I,[(0,a._)("h3",L,(0,u.zw)(t.songname),1),(0,a._)("h4",E,(0,u.zw)(t.artistname),1)]),(0,a._)("button",{class:"songitem__button",onClick:s[0]||(s[0]=(...e)=>r.togglePlay&&r.togglePlay(...e)),title:"Play"},D)])}var M={name:"SongItem",props:{songname:{type:String,default:"- - -"},artistname:{type:String,default:"- - -"},coverimageSrc:{type:String,default:"https://i.pinimg.com/originals/11/fd/5c/11fd5ce70f45a794e02c1a8dc94d742d.png"}},data(){return{isPlaying:!1,playIcon:"../../assets/play_icon.svg",pauseIcon:"../../assets/pause_icon.svg"}},methods:{togglePlay(){this.$emit("songPlayed",this.songname),this.isPlaying=!this.isPlaying,this.playIcon=this.isPlaying?this.pauseIcon:"../../assets/play_icon.svg"}}},U=t(744);const T=(0,U.Z)(M,[["render",k]]);var $=T,V=t.p+"img/default_playlist_image.a89b9a0c.png";const N={class:"playlistitem"},O=(0,a._)("figure",{class:"playlistitem__coverbox"},[(0,a._)("img",{id:"albumCover",class:"playlistitem__coverbox_coverimage",src:V,alt:"Playlist Image"})],-1),R=(0,a._)("div",{class:"playlistitem__details"},[(0,a._)("h3",{class:"playlistitem__details_playlistname"},"Lofi Hiphop")],-1),j={key:0,class:"playlistitem__songscontainer"};function Z(e,s,t,o,n,r){const i=(0,a.up)("SongItem");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",N,[O,R,(0,a._)("button",{class:(0,u.C_)(["playlistitem__button",{playlistButton:n.playlistCollapsed}]),title:"View Songs",onClick:s[0]||(s[0]=e=>n.playlistCollapsed=!n.playlistCollapsed)},[(0,a._)("img",{class:(0,u.C_)(["playlistitem__button_icon",{playlistButton__icon:n.playlistCollapsed}]),src:P,alt:"Play/Pause Icon"},null,2)],2)]),n.playlistCollapsed?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(i)]))],64)}var z={name:"PlaylistItem",props:{},components:{SongItem:$},data(){return{playlistCollapsed:!0}},methods:{}};const q=(0,U.Z)(z,[["render",Z]]);var Q=q,X={name:"SideBar",props:{songs:{type:Array,default:()=>[]}},components:{SongItem:$,PlaylistItem:Q},data(){return{collapse:!1,buttonText:"<",optionSelected:!1,songIsSelected:!0,searchQuery:""}},methods:{handleSongPlayed(e){this.$emit("songPlayed",e)},changeButtonText(){"<"===this.buttonText?this.buttonText=">":this.buttonText="<"}},computed:{filteredSongs(){return this.searchQuery?this.songs.filter((e=>e.fileName.toLowerCase().includes(this.searchQuery.toLowerCase())||e.artist.toLowerCase().includes(this.searchQuery.toLowerCase()))):this.songs}}};const Y=(0,U.Z)(X,[["render",B]]);var F=Y,G=t.p+"img/prev_icon.3a44d983.svg",W=t.p+"img/next_icon.e50d48c2.svg",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAzCAYAAADl70o1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHMSURBVHgB7ZiLbYMwEEAvmSAjeIRsAJ2g3aAdoRvQDVAnoBt0BLpB0gnMBskG13M4FyvxB5MaUOUnWY5yF3g5jG0AyGQymcz/BREFtYaapNZSe4a1QDJ7aie8pYGl8chplqvkCDnFJ/wR25hkJUddS20XSA3FRzNaMEIuCq74gVqtbjqYwsjLatJGHNtEciGSykUJ8jkK7Kcp5HONk8R+npMYT5Sgcb7aqOQulZxTUMfQMw3hUMkqlVxIUFM7ckqOn1LJ+QR31F5wGNOv4K9imULOKWirElrGGn1XcbzemnLQz3MCErPZbL6oU03J2cbjN/d7c6KeRc7gnfsnS+zIvbgI8rUWMC+/EtcBqnCnY1tXUmpMCV+eFuxgpVwEedB2MCM4LGdnS0zwx868SR5gXknB/dETGwR5TMwp+cj9hyVWcH8rjwlXEuMcpZErLPEDxwrXAVKtxddLXeWRlxD4l6l2M5rGkSNd8i7J2M1qSLBFx3aLvn/jHImh/aDxo6Q7auwve4lTdtR3SE59JomXmygZKyix32Ld98QYITnpmcRG1IM7TeZq4lST+TmQGoqnBdf8bmaE5PJvtzQ4vB9US1O7isplMplMZl5+AEhjtYWbM01IAAAAAElFTkSuQmCC";const J={class:"login_container"},K={class:"player"},ee={class:"player__contents"},se={class:"player__contents_coverphotobox"},te=["src"],oe={class:"player__contents_details"},ae={class:"player__contents_details-songname"},ne={class:"player__contents_details-artistname"},re={class:"player__contents_controls"},ie={class:"player__contents_controls-progressbar--timestamp"},le={class:"player__contents_controls-progressbar--duration"},ce={class:"player__contents_controls-buttons"},ue=(0,a._)("img",{class:"player__contents_controls-buttons--prevbox---icon",src:G,alt:"Prev. Button"},null,-1),ge=[ue],de=["src"],me=(0,a._)("img",{class:"player__contents_controls-buttons--nextbox---icon",src:W,alt:"Next Button"},null,-1),pe=[me],he={class:"volumeBar__container"},_e=(0,a._)("div",{class:"volumeBar__iconBox"},[(0,a._)("img",{src:H,alt:"Volume Icon",class:"volumeBar__iconBox_icon"})],-1),ve=["src","volume"];function ye(e,s,t,o,n,r){const i=(0,a.up)("LoginButton"),l=(0,a.up)("AccountMenu");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",J,[0==n.loggedIn?((0,a.wg)(),(0,a.j4)(i,{key:0,onLogIn:r.displayAccount},null,8,["onLogIn"])):(0,a.kq)("",!0),1==n.loggedIn?((0,a.wg)(),(0,a.j4)(l,{key:1,onSignOut:r.signOut},null,8,["onSignOut"])):(0,a.kq)("",!0)]),(0,a._)("div",K,[(0,a._)("div",ee,[(0,a._)("div",se,[(0,a._)("img",{class:"player__contents_coverphotobox-photo",src:r.getCoverArt,alt:"Album Image"},null,8,te)]),(0,a._)("div",oe,[(0,a._)("h3",ae,(0,u.zw)(t.songName),1),(0,a._)("h4",ne,(0,u.zw)(t.artistName),1)]),(0,a._)("div",re,[(0,a._)("p",ie,(0,u.zw)(n.currentTime),1),(0,a._)("div",{class:"player_contents_controls-progressbar--bar--progress, progressBar",ref:"progressBar",onMouseover:s[0]||(s[0]=(...e)=>r.hoverProgressBar&&r.hoverProgressBar(...e)),onMouseleave:s[1]||(s[1]=(...e)=>r.hoverProgressBarLeave&&r.hoverProgressBarLeave(...e)),onMousedown:s[2]||(s[2]=(...e)=>r.startProgressBarDrag&&r.startProgressBarDrag(...e)),onMousemove:s[3]||(s[3]=(...e)=>r.dragProgressBar&&r.dragProgressBar(...e)),onTouchstart:s[4]||(s[4]=(...e)=>r.startProgressBarDrag&&r.startProgressBarDrag(...e)),onTouchmove:s[5]||(s[5]=(...e)=>r.dragProgressBar&&r.dragProgressBar(...e)),onMouseup:s[6]||(s[6]=(...e)=>r.endProgressBarDrag&&r.endProgressBarDrag(...e)),onTouchend:s[7]||(s[7]=(...e)=>r.endProgressBarDrag&&r.endProgressBarDrag(...e))},[(0,a._)("div",{class:"progressBarFilled",style:(0,u.j5)({width:this.isDragging?this.position+"px":n.progress+"%"})},null,4),(0,a._)("div",{style:(0,u.j5)({transform:`translateX(${this.progress/100*63.5+"rem"}) translateY(-13.5px)`}),class:"circle",ref:"progressCircle"},null,4)],544),(0,a._)("p",le,(0,u.zw)(t.songLength?r.formatLength(t.songLength):"0:00"),1)]),(0,a._)("div",ce,[(0,a._)("button",{onClick:s[8]||(s[8]=(...e)=>r.previous&&r.previous(...e)),class:"player__contents_controls-buttons--prevbox button-animation-2"},ge),(0,a._)("button",{ref:"playButton",onClick:s[9]||(s[9]=(...e)=>r.play&&r.play(...e)),class:"player__contents_controls-buttons--playpausebox button-animation-1"},[(0,a._)("img",{class:"player__contents_controls-buttons--playpausebox---icon",src:this.currentState,alt:"Pause/Play Button"},null,8,de)],512),(0,a._)("button",{onClick:s[10]||(s[10]=(...e)=>r.next&&r.next(...e)),class:"player__contents_controls-buttons--nextbox button-animation-2"},pe),(0,a._)("div",he,[_e,(0,a._)("div",{title:"DRAG For Volume",class:"volumeBar",ref:"volumeBar",onMousedown:s[11]||(s[11]=(...e)=>r.startVolumeBarDrag&&r.startVolumeBarDrag(...e)),onMousemove:s[12]||(s[12]=(...e)=>r.dragVolumeBar&&r.dragVolumeBar(...e)),onTouchstart:s[13]||(s[13]=(...e)=>r.startVolumeBarDrag&&r.startVolumeBarDrag(...e)),onTouchmove:s[14]||(s[14]=(...e)=>r.dragVolumeBar&&r.dragVolumeBar(...e)),onMouseup:s[15]||(s[15]=(...e)=>r.endVolumeBarDrag&&r.endVolumeBarDrag(...e)),onTouchend:s[16]||(s[16]=(...e)=>r.endVolumeBarDrag&&r.endVolumeBarDrag(...e)),onMousewheel:s[17]||(s[17]=(...e)=>r.scrollVolumeBar&&r.scrollVolumeBar(...e))},[(0,a._)("div",{title:"DRAG For Volume",class:"volumeBarFilled",style:(0,u.j5)({width:(this.isDraggingVol,this.volume+"px")})},null,4)],544)])])])]),(0,a._)("audio",{ref:"audioPlayer",preload:"none",class:"audioPlayer",controls:"",autoplay:"",src:t.songURL,volume:.3,style:{"margin-top":"50px",display:"none"}},null,8,ve)],64)}const fe={id:"loginModal",class:"modal",ref:"modal"},be={class:"modal-content"},we={class:"modal-header"},Be={key:0,class:"modal-title"},Pe={key:1,class:"modal-title"},Ae={class:"closeContainer"},Se={class:"modal-body"},xe={key:0,class:"field"},Ie=(0,a._)("div",{class:"field-label"},[(0,a._)("h1",{id:"emailLabel"},"Email:")],-1),Le={class:"field-body"},Ee={id:"emailInput",class:"input",type:"text",ref:"email"},Ce={key:0,class:"field-label"},De=(0,a._)("h2",{class:"errorMessage"},"Please Enter a Valid Email Address",-1),ke=[De],Me={class:"field"},Ue=(0,a._)("div",{class:"field-label"},[(0,a._)("h1",{id:"unameLabel"},"Username:")],-1),Te={class:"field-body"},$e={id:"unameInput",class:"input",type:"text",ref:"username"},Ve={key:0,class:"field-label"},Ne={class:"errorMessage"},Oe={key:1,class:"field-label"},Re={class:"errorMessage"},je={class:"field"},Ze=(0,a._)("div",{class:"field-label"},[(0,a._)("h1",{id:"passwordLabel"},"Password:")],-1),ze={class:"field-body"},qe={id:"passwordInput",class:"input",type:"text",ref:"password"},Qe={key:0,class:"field-label"},Xe=(0,a._)("h2",{class:"errorMessage"},"Please Enter a Password That Is:",-1),Ye=(0,a._)("ul",{id:"passErrList"},[(0,a._)("li",null,"8-15 Characters Long"),(0,a._)("li",null,"Contains At Least 1 Capital Letter"),(0,a._)("li",null,"Contains At Least 1 Special Character"),(0,a._)("li",null,"Contains At Least 1 Number")],-1),Fe=[Xe,Ye],Ge={key:1,class:"field-label"},We=(0,a._)("h2",{class:"errorMessage"},"Username And Password Do Not Match",-1),He=[We],Je={class:"submit-container"};function Ke(e,s,t,o,n,r){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{onClick:s[0]||(s[0]=e=>r.clicked(e)),id:"signupButton",class:"button",ref:"signup"},"Sign Up",512),(0,a._)("button",{onClick:s[1]||(s[1]=e=>r.clicked(e)),id:"loginButton",class:"button",ref:"login"},"Login  ",512),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a._)("div",fe,[(0,a._)("div",be,[(0,a._)("div",we,["Sign Up"==n.modalType?((0,a.wg)(),(0,a.iD)("h1",Be,"Nice To Meet You!")):((0,a.wg)(),(0,a.iD)("h1",Pe,"Welcome Back!")),(0,a._)("div",Ae,[(0,a._)("button",{class:"close",onClick:s[2]||(s[2]=e=>r.close(n.modalType))},"×")])]),(0,a._)("div",Se,["Sign Up"==n.modalType?((0,a.wg)(),(0,a.iD)("div",xe,[Ie,(0,a._)("div",Le,[(0,a._)("input",Ee,null,512)]),n.newEmailErr?((0,a.wg)(),(0,a.iD)("div",Ce,ke)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),(0,a._)("div",Me,[Ue,(0,a._)("div",Te,[(0,a._)("input",$e,null,512)]),n.newUnameErr?((0,a.wg)(),(0,a.iD)("div",Ve,[(0,a._)("h2",Ne,(0,u.zw)(n.unameErrMsg),1)])):(0,a.kq)("",!0),n.loginUserErr?((0,a.wg)(),(0,a.iD)("div",Oe,[(0,a._)("h2",Re,(0,u.zw)(n.unameErrMsg),1)])):(0,a.kq)("",!0)]),(0,a._)("div",je,[Ze,(0,a._)("div",ze,[(0,a._)("input",qe,null,512)]),n.newPassErr?((0,a.wg)(),(0,a.iD)("div",Qe,Fe)):(0,a.kq)("",!0),n.loginPassErr?((0,a.wg)(),(0,a.iD)("div",Ge,He)):(0,a.kq)("",!0)]),(0,a._)("div",Je,["Sign Up"==n.modalType?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:s[3]||(s[3]=e=>r.signUp()),id:"submitButton",class:"button"},(0,u.zw)(n.modalType),1)):((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:s[4]||(s[4]=e=>r.logIn()),id:"submitButton",class:"button"},(0,u.zw)(n.modalType),1))])])])],512)]))],64)}var es=t(154),ss={name:"LoginButton",data(){return{modalType:"",newEmailErr:!1,newUnameErr:!1,newPassErr:!1,loginPassErr:!1,loginUserErr:!1,unameErrMsg:""}},methods:{clicked(e){"signupButton"===e.target.id?this.modalType="Sign Up":this.modalType="Log In",this.$refs.modal.style="display: block;"},close(e){this.$refs.modal.style="display: none;","Sign Up"==e?(this.$refs.email.value="",this.$refs.username.value="",this.$refs.password.value="",this.newEmailErr=!1,this.newUnameErr=!1,this.newPassErr=!1):"Log In"==e&&(this.$refs.username.value="",this.$refs.password.value="",this.loginUserErr=!1,this.loginPassErr=!1)},validateEmail(e){let s=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;return!!s.test(e)},validatePassword(e){let s=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;return!!s.test(e)},async validateUserName(e){let s=/[a-zA-Z]/;if(e.length<3)return this.unameErrMsg="Please Input a Username With At Least Three Characters",!0;if(!s.test(e))return this.unameErrMsg="Please Input a Username With At Least One Letter",!0;let t=null;return await es.Z.get(`http://localhost:5000/api/users/userName/${e}`).then((e=>{t=e.data})).catch((e=>{console.error(e)})),null!=t&&"Sign Up"==this.modalType?this.unameErrMsg="Sorry, That Username Is Already Taken":null!=t&&"Log In"==this.modalType&&(this.unameErrMsg="Invalid Username"),t},async signUp(){this.newUnameErr=!1,this.newEmailErr=!1,this.newPassErr=!1;let e=!1,s=this.$refs.email.value,t=this.$refs.username.value,o=this.$refs.password.value,a=await this.validateUserName(t);if(null!==a&&(this.newUnameErr=!0,e=!0),this.validateEmail(s)||(this.newEmailErr=!0,e=!0),this.validatePassword(o)||(this.newPassErr=!0,e=!0),e)return;let n={email:s,username:t,password:o};await es.Z.post("http://localhost:5000/api/users",n).then((e=>{console.log(e.data)})).catch((e=>{console.error(e)})),this.$emit("LogIn",t),this.close(this.modalType)},async logIn(){this.loginUserErr=!1,this.loginPassErr=!1;let e=this.$refs.username.value,s=this.$refs.password.value,t=await this.validateUserName(e);null!==t?t.password==s?(this.$emit("LogIn",t.username),console.log(`Logged in: ${t.username}`),this.close(this.modalType)):this.loginPassErr=!0:this.loginUserErr=!0}}};const ts=(0,U.Z)(ss,[["render",Ke]]);var os=ts,as=t.p+"img/user.4fd1487d.svg";const ns={class:"userAccount__container"},rs=(0,a._)("img",{class:"userAccount__icon",src:as,height:"50",width:"50",alt:"accountMenu"},null,-1),is=[rs],ls=(0,a._)("button",{class:"userAccount__options_option"},"Account",-1);function cs(e,s,t,o,n,r){return(0,a.wg)(),(0,a.iD)("div",ns,[(0,a._)("button",{id:"userAccount",class:"button userAccount",onClick:s[0]||(s[0]=e=>n.menuVisible=!n.menuVisible),title:"Account Menu"},is),(0,a._)("div",{class:(0,u.C_)(["userAccount__options",{accountMenu__appear:n.menuVisible}])},[ls,(0,a._)("button",{onClick:s[1]||(s[1]=e=>r.signOut()),class:"userAccount__options_option"},"Sign Out")],2)])}var us={name:"AccountMenu",data(){return{menuVisible:!1}},methods:{signOut(){this.$emit("signOut",!1)}}};const gs=(0,U.Z)(us,[["render",cs]]);var ds=gs,ms={name:"PlayerControls",props:{songs:{type:Array,default:()=>[]},songName:{type:String,default:""},artistName:{type:String,default:""},coverArt:{type:String,default:""},songURL:{type:String,default:""},songLength:{type:[String,Number],default:""},currentIndex:{type:Number,default:0}},data(){return{playButtonImage:t(892),pauseButtonImage:t(395),currentState:t(395),currentTime:"0:00",progress:0,volume:3,isDragging:!1,isDraggingVol:!1,loggedIn:!1}},methods:{play(){this.$refs.audioPlayer.paused?(this.$refs.audioPlayer.play(),this.currentState=this.pauseButtonImage):(this.$refs.audioPlayer.pause(),this.currentState=this.playButtonImage)},next(){this.currentIndex+1<this.songs.length&&this.$emit("nextSong",this.songs[this.currentIndex+1].fileName),this.currentState=this.pauseButtonImage},previous(){this.$refs.audioPlayer.currentTime>4?this.$refs.audioPlayer.currentTime=0:(this.currentIndex-1>-1&&this.$emit("previousSong",this.songs[this.currentIndex-1].fileName),this.currentState=this.pauseButtonImage)},formatLengthM(e){const s=Math.floor(e/60),t=(e%60).toFixed(0),o=t<10?`0${t}`:`${t}`;return`${s}:${o}`},hoverProgressBar(){},hoverProgressBarLeave(){this.isDragging},startProgressBarDrag(e){this.isDragging=!0,this.isDragging=!0,this.dragProgressBar(e),document.addEventListener("mousemove",this.dragProgressBar),document.addEventListener("mouseup",this.endProgressBarDrag)},dragProgressBar(e){if(this.isDragging){const s=this.$refs.progressBar.getBoundingClientRect();let t=e.pageX||e.touches[0].pageX,o=(t-s.left)/s.width;o>1&&(o=1,t=s.right),this.progress=100*o,this.position=t-s.left}},endProgressBarDrag(e){if(this.isDragging){this.isDragging=!1;const s=this.$refs.audioPlayer,t=this.$refs.progressBar.getBoundingClientRect();let o=e.pageX||e.touches[0].pageX,a=(o-t.left)/t.width;a*=100,o-=t.left,s.currentTime=a/100*s.duration,document.addEventListener("mousemove",this.dragProgressBar),document.addEventListener("mouseup",this.endProgressBarDrag)}},startVolumeBarDrag(e){this.isDraggingVol=!0,this.dragProgressBar(e),document.addEventListener("mousemove",this.dragVolumeBar),document.addEventListener("mouseup",this.endVolumeBarDrag)},dragVolumeBar(e){if(this.isDraggingVol){const s=this.$refs.volumeBar.getBoundingClientRect();let t=e.pageX||e.touches[0].pageX,o=(t-s.left)/s.width;o>1&&(o=1,t=s.right),o<0&&(o=0,t=s.right),this.volume=100*o,this.positionVol=t-s.left}},endVolumeBarDrag(e){if(this.isDraggingVol){this.isDraggingVol=!1;const s=this.$refs.audioPlayer,t=this.$refs.volumeBar.getBoundingClientRect();let o=e.pageX||e.touches[0].pageX,a=(o-t.left)/t.width;a*=100,o-=t.left,a>100&&(a=100,this.volume=100,o=t.right),a<0&&(a=0,this.volume=0,o=t.right),s.volume=a/100/4,document.addEventListener("mousemove",this.dragVolumeBar),document.addEventListener("mouseup",this.endVolumeBarDrag)}},scrollVolumeBar(e){const s=e.deltaY;s<0?this.volume+8<=100?this.volume+=8:this.volume=100:this.volume-8>=0?this.volume-=8:this.volume=0,this.$refs.audioPlayer.volume=this.volume/100/4},displayAccount(e){console.log(e),this.loggedIn=!0},signOut(e){this.loggedIn=e}},components:{LoginButton:os,AccountMenu:ds},computed:{getCoverArt(){return this.coverArt?this.coverArt:t(346)},formatLength(){return e=>{const s=Math.floor(e/60),t=(e%60).toFixed(0),o=t<10?`0${t}`:`${t}`;return`${s}:${o}`}}},mounted(){this.$refs.audioPlayer?this.$refs.audioPlayer.addEventListener("timeupdate",(()=>{this.$refs.audioPlayer&&(this.currentTime=this.formatLengthM(this.$refs.audioPlayer.currentTime),this.progress=this.$refs.audioPlayer.currentTime/this.songLength*100)})):this.currentTime="0:00",this.$refs.audioPlayer.volume=this.volume/100}};const ps=(0,U.Z)(ms,[["render",ye]]);var hs=ps,_s={name:"MainPlayer",components:{SideBar:F,PlayerControls:hs},data(){return{songs:[],loadedSongs:!0,currentIndex:0,songID:"",songName:"",artistName:"",coverArt:"",songLength:"",songURL:"",playingURL:""}},methods:{async getSongList(){try{const e=await es.Z.get("http://localhost:5000/api/songs");this.songs=e.data,this.loadedSongs=!0}catch(e){console.error("Error fetching song list",e)}},async fetchSong(e){try{console.log(e);const s=await es.Z.get(`http://localhost:5000/api/songs/fileName/${e}`);this.songURL=`http://localhost:5000/api/songs/fileName/${e}`,this.songID=s.data.id,this.songName=s.data.name,this.artistName=s.data.artist,this.songLength=s.data.length,this.coverArt=s.data.albumCover}catch(s){console.error("Error fetching song",s)}},async playSong(e){await this.fetchSong(e),this.songID?this.playingURL=`http://localhost:5000/api/songs/id/${this.songID}`:console.error("Error: songID is empty"),this.currentIndex=this.songs.findIndex((e=>e.fileName===this.songName)),console.log(this.currentIndex)}},created(){this.getSongList()}};const vs=(0,U.Z)(_s,[["render",c]]);var ys=vs,fs={name:"App",components:{MainPlayer:ys}};const bs=(0,U.Z)(fs,[["render",n]]);var ws=bs;(0,o.ri)(ws).mount("#app")},395:function(e,s,t){e.exports=t.p+"img/pause_icon.16698fbc.svg"},892:function(e,s,t){e.exports=t.p+"img/play_icon.c05cf572.svg"},346:function(e,s,t){e.exports=t.p+"img/default_coverimage.2778f8ef.png"}},s={};function t(o){var a=s[o];if(void 0!==a)return a.exports;var n=s[o]={exports:{}};return e[o](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(s,o,a,n){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],n=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||r>=n)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(i=!1,n<r&&(r=n));if(i){e.splice(u--,1);var c=a();void 0!==c&&(s=c)}}return s}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,a,n]}}(),function(){t.d=function(e,s){for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/music_player_app_audiowave/"}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,o){var a,n,r=o[0],i=o[1],l=o[2],c=0;if(r.some((function(s){return 0!==e[s]}))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(l)var u=l(t)}for(s&&s(o);c<r.length;c++)n=r[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},o=self["webpackChunkmusic_player"]=self["webpackChunkmusic_player"]||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(497)}));o=t.O(o)})();
//# sourceMappingURL=app.afe72085.js.map
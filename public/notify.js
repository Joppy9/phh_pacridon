  const shell = require('electron').shell
  setTimeout( ()  =>  {
    let notification = new Notification(
      '進捗どうですか？',
    {body: 'みんな大好きレポート!'},
    {body: '楽しいレポート!'},
    {body: '素敵なレポート!'},
    {body: 'とりあえずレポート!'},
    )
    notification.onclick =( () => {
      shell.openExternal('https://secure.nnn.ed.jp/mypage/report/pc/list/index')
    })
  },3000);
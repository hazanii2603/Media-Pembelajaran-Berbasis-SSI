function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZxkZfKgh0D":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

SheetsSet('Ayo Coba Pikirkan', player.GetVar('TextEntry'));
}


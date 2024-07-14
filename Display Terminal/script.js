let welcomeMessage = "Come in";
const logParagraph = document.getElementById('logParagraph');

var buttonCounter = 0;

FakeLogger("I'm in");

function RenameWelcomeHeader()
{
    var header = document.getElementById('welcomeheader');
    header.innerHTML = welcomeMessage;
}

function FakeLogger(logMessage)
{
    console.log(logMessage);
    logParagraph.innerHTML = logMessage;
}

function execute()
{
    buttonCounter += 1;
    
    if (buttonCounter == 1)
    {
        FakeLogger("You pressed me once!");
    }
    else
    {
        FakeLogger(`You have pressed me ${buttonCounter} times`);
    }
}
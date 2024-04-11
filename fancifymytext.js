alert("Hello, world!");

function makeTextBigger() {
    //alert("Hello, world!");
    document.getElementById('textInput').style.fontSize = '24pt';
}

function styleText() {
    if (document.getElementById('fancy').checked) {
        document.getElementById('textInput').style.fontWeight = 'bold';
        document.getElementById('textInput').style.color = 'blue';
        document.getElementById('textInput').style.textDecoration = 'underline';
    } else if (document.getElementById('boring').checked) {
        document.getElementById('textInput').style.fontWeight = 'normal';
        document.getElementById('textInput').style.color = 'black';
        document.getElementById('textInput').style.textDecoration = 'none';
    }
}

function mooify() {
    var textArea = document.getElementById('textInput');
    var text = textArea.value.toUpperCase();
    var sentences = text.split('.').map(function(sentence) {
        if (sentence.trim() !== "") {
            return sentence.trim() + "-MOO";
        }
        return sentence;
    });
    textArea.value = sentences.join('. ');
}
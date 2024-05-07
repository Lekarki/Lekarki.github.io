var openTheStack = function() {
    var currentClassName = document.getElementById('cardStack').className;
    if (currentClassName == 'card-group') {
        document.getElementById('cardStack').className = 'card-group active';
    } else {
        document.getElementById('cardStack').className = 'card-group'

    }
}

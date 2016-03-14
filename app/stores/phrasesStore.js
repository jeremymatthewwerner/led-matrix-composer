var dispatcher = require("../dispatcher");

function PhraseStore() {
    var listeners = [];
    var phrases = [{ name: "Hi Sula!", phrase:"Hi Sula!" }, 
                    { name: "Hi Milo!",phrase:"Hi Milo!" }];

    function getPhrases() {
        return phrases;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addPhrase(phrase) {
        phrases.push(phrase)
        triggerListeners();
    }

    function deletePhrase(phrase) {
        var _index;
        phrases.map(function (s, index) {
            if (s.name === phrase.name) {
                _index = index;
            }
        });
        phrases.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(phrases);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "phrase") {
            switch (split[1]) {
                case "addPhrase":
                    addPhrase(payload.phrase);
                    break;
                case "deletePhrase":
                    deletePhrase(payload.phrase);
                    break;
            }
        }
    });

    return {
        getPhrases: getPhrases,
        onChange: onChange
    }
}

module.exports = PhraseStore();

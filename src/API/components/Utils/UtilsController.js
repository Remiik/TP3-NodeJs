
/*Envoyer "Ok" si la page s'affiche */

exports.ping = (req, res) => {
    return res.status(200).json({
        result: 'ok'
    });
};
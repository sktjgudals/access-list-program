const { User } = require('/models/index');
export default async function userToInput(req, res) {
    const ids = req.body.state;
    let body = [];
    try{
        const userData = await User.findOne({ where: { id: ids } });
        body.push({ id: userData.id, name: userData.name, cardId: userData.cardId, subject: userData.subject });
        return res.json(body);
    }catch(err){
        throw err;
    }
}
//create 유저
const { User } = require('/models/index');
export default async function userToInput(req, res) {
  const inputCardId = req.body.state.id;
  const inputName = req.body.state.name;
  const class1 = req.body.state.class1
  const class2 = req.body.state.class2;
  const class3 = req.body.state.class3;
  const class4 = req.body.state.class4;
  const cl = class1 + ',' + class2 + ',' + class3 + ',' + class4;
  if (inputName) {
    try {
      const userFind = await User.findOne({ where: { cardId: inputCardId } }); 
      if (inputCardId) {
        if (!userFind) {
          const userCreat = await User.create({ name: inputName, cardId: inputCardId, subject: cl });
          return res.json({ id: userCreat.id, name: userCreat.name, cardId: userCreat.cardId, subject: userCreat.subject });
        }
        return res.json(null);
      }
      return res.json(null);
    } catch (err) {
      throw err;
    }
  }
  return res.json(null);
}

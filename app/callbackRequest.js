module.exports = (err, result, res) => {

        if(err) {
          return res.status(500).send({
            message: err.message || "An error occured"
          });
        }

        return res.send(result);
}

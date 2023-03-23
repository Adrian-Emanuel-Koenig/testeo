class MongoCrud {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const item = await this.model.create(data);
      return item;
    } catch (error) {
      throw new Error(`Error creating item: ${error}`);
    }
  }

  async read(username) {
      const item = await this.model.findOne({ username });
      if (!item) {
        console.log(item)
        return "false";
      }
      return item;
  }

  async update(id, data) {
    try {
      const item = await this.model.findByIdAndUpdate(id, data, { new: true });
      if (!item) {
        throw new Error(`Item not found`);
      }
      return item;
    } catch (error) {
      throw new Error(`Error updating item: ${error}`);
    }
  }

  async delete(id) {
    try {
      const item = await this.model.findByIdAndDelete(id);
      if (!item) {
        throw new Error(`Item not found`);
      }
      return item;
    } catch (error) {
      throw new Error(`Error deleting item: ${error}`);
    }
  }

  // async list(filter) {
  //     try {
  //         const items = await this.model.find(filter);
  //         return items;
  //     } catch (error) {
  //         throw new Error(`Error listing items: ${error}`);
  //     }
  // }
}

module.exports = MongoCrud;

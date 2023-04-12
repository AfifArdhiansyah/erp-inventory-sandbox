const itemService = require('../services/itemService');

class ItemController {
    async getAll(req, res) {
        await itemService.getAll()
            .then(data=>{
                if(data.legth == 0){
                    res.status(404).json({
                        status: 'error',
                        message: 'Item list not found',
                        data: {}
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Item list retrieved successfully',
                    data: items
                });
            })
            .catch(err=>{
                res.status(500).json({
                    status: 'error',
                    message: 'Item list retrieved failed',
                    data: err
                });
            });
    }

    async getById(req, res) {
        const {id} = req.params;
        await itemService.getById(id)
        .then(data=>{
            if(data == null){
                res.status(404).json({
                    status: 'error',
                    message: 'Item not found',
                    data: {}
                });
            }
            res.status(200).json({
                status: 'success',
                message: 'Item retrieved successfully',
                data: data
            });
        })
        .catch(err=>{
            res.status(500).json({
                status: 'error',
                message: 'Item retrieved failed',
                data: err
            });
        });
    }

    async create(req, res) {
        const item = req.body;
        itemService.create(item)
        .then(data=>{
            if(data.status == 'error'){
                res.status(400).json({
                    status: 'error',
                    message: 'wrong input',
                    data: {}
                });
            }
            res.status(200).json({
                status: 'success',
                message: 'Item created successfully',
                data: data
            });
        })
        .catch(err=>{
            res.status(500).json({
                status: 'error',
                message: 'Item created failed',
                data: err
            });
        });
    }

    async update(req, res) {
        const {id} = req.params;
        const item = req.body;
        await itemService.update(id, item)
        .then(data=>{
            res.status(200).json({
                status: 'success',
                message: 'Item updated successfully',
                data: data
            });
        })
        .catch(err=>{
            res.status(500).json({
                status: 'error',
                message: 'Item updated failed',
                data: err
            });
        });
    }

    async delete(req, res) {
        const {id} = req.params;
        await itemService.delete(id)
        .then(data=>{
            res.status(200).json({
                status: 'success',
                message: 'Item deleted successfully',
                data: data
            });
        })
        .catch(err=>{
            res.status(500).json({
                status: 'error',
                message: 'Item deleted failed',
                data: err
            });
        });
    }
}

module.exports = new ItemController();
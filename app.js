const express = require('express')
const app = express()
const ExpressError = require('./expressError')

const {mean, median, mode, isNumber} = require('./statistics')

app.get('/mean', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError(`Error. Enter a query of 'nums' with a list of numbers separated by commas`,400)
    }
    let stringNums = req.query.nums.split(',')
    let numbers = isNumber(stringNums)
    if (numbers instanceof Error){
        throw new ExpressError(numbers.message)
    }
    let output = {
        operation : 'mean',
        value : mean(numbers)
    }
    return res.send(output)
})

app.get('/median', function(req,res,next){
    if(!req.query.nums){
        throw new ExpressError(`Error. Enter a query of 'nums' with a list of numbers separated by commas`,400)
    }
    let stringNums = req.query.nums.split(',')
    let numbers = isNumber(stringNums)
    if (numbers instanceof Error){
        throw new ExpressError(numbers.message)
    }
    let output = {
        operation : 'median',
        value : median(numbers)
    }
    return res.send(output)
})

app.get('/mode', function(req,res,next){
    if(!req.query.nums){
        throw new ExpressError(`Error. Enter a query of 'nums' with a list of numbers separated by commas`,400)
    }
    let stringNums = req.query.nums.split(',')
    let numbers = isNumber(stringNums)
    if (numbers instanceof Error){
        throw new ExpressError(numbers.message)
    }
    let output = {
        operation : 'mode',
        value : mode(numbers)
    }
    return res.send(output)
})

app.use(function(req,res,next){
    const error = new ExpressError('Error: Page not found', 404)
    return next(error)
})

app.use(function(error, req, res, next){
    res.status(error.status || 500)
    return res.json({error: error})
})

app.listen(3000, function(){
    console.log(`Server starting on port 3000`)
})
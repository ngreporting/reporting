var Client = require('./reporting_client.js')

var client = new Client.ReportingClient('a', 'b')

var failed = false

testAsyncDefined = (testFn, wait, name) => {
    var res
    testFn((result)=>{
        res = result
    })
    // testFn(res)
    setTimeout(()=>{
        if (res == undefined) {
            console.log(name + ' result should not be undefined after ' + wait + ' msec')
            failed = true
        }
    }, wait)
}

testAsyncDefined((result) => {
    client.onReportsChange((reps)=>{
        result(reps)
    })
}, 100, 'onReportsChange')

testAsyncDefined((result) => {
    client.onThreadChange('a', (thread)=>{
        result(thread)
    })
}, 100, 'onThreadChange')

testAsyncDefined((result) => {
    client.onMessageChange('a', (thread)=>{
        result(thread)
    })
}, 100, 'onMessageChange')

testAsyncDefined((result) => {
    client.onUserChange('a', (thread)=>{
        result(thread)
    })
}, 100, 'onUserChange')

testAsyncDefined((result) => {
    client.onAttachmentChange('a', (thread)=>{
        result(thread)
    })
}, 100, 'onAttachmentChange')

if (typeof client.addReport({}) != 'string') {
    console.log('addReport should return new id')
    failed = true
}

if (typeof client.addAttachment({}) != 'string') {
    console.log('addAttachment should return new id')
    failed = true
}

if (typeof client.addMessage({}) != 'string') {
    console.log('addMessage should return new id')
    failed = true
}

setTimeout(()=> {
    if (failed) {
        console.log('FAILED')
    } else {
        console.log('SUCCESS')
    }
}, 200)
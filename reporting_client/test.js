var ReportingClient = require('./reporting_client.js')

var client = new ReportingClient('a', 'b')

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
    client.monitorReports((reps)=>{
        result(reps)
    })
}, 100, 'monitorReports')

testAsyncDefined((result) => {
    client.monitorThread('a', (thread)=>{
        result(thread)
    })
}, 100, 'monitorThread')

testAsyncDefined((result) => {
    client.monitorMessage('a', (thread)=>{
        result(thread)
    })
}, 100, 'monitorMessage')

testAsyncDefined((result) => {
    client.monitorReport('a', (thread)=>{
        result(thread)
    })
}, 100, 'monitorReport')

testAsyncDefined((result) => {
    client.monitorUser('a', (thread)=>{
        result(thread)
    })
}, 100, 'monitorUser')

if (typeof client.addReport({}) != 'string') {
    console.log('addReport should return new id')
    failed = true
}

var calls = 0, url
client.uploadAttachment('base64data', 'jpg', (percent) => {
    console.log('called with percent: ' + (percent * 100))
    calls += 1
}, (u) => {
    url = u
})
setTimeout(() => {
    if (calls < 6 || typeof url != 'string') {
        failed = true
        console.log('Expected progress to be called 6 times and url to be set')
    }
}, 6000)

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
}, 7000)
type Async = Promise<string>

type Value = Awaited<Async> // string


function doSomething(){
    return 3
}



type Value1 = Awaited<ReturnType<typeof doSomething>> // number

interface Point {
    x: number,
    y: number

    draw: () => void
}


let drawPoint = (point: (point: Point) => {    //inline annotation
    //....
}


let getDistance = (pointA: Point, PointB: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})
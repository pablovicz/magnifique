


export function range(start: number, end: number): number[] {
    var list = [];
    for (var i = start; i <= end; i++) {
        list.push(i);
    }

    return list;
}

export function getDaysArray(start: Date, end: Date) {
    for (var arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt));
    }
    return arr;
};

export const delay = (seconds: number) => new Promise(
    resolve => setTimeout(resolve, seconds * 1000)
  );
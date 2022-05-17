import { f as n, s as l } from './index.1651757372134.js';
var c = '/cat.1651757372134.png',
    u = '/Mountain.1651757372134.png',
    f = '/self.1651757372134.png',
    m = '/trees.1651757372134.png';
function v() {
    const e = n(),
        a = n(null);
    function g(s) {
        (a.value = s), e.value.click();
    }
    function o(s) {
        const t = s.target,
            i = t.files[0],
            r = URL.createObjectURL(i);
        l.commit('data/setUserImage', { imageURL: r, userId: a.value }),
            (t.value = '');
    }
    return { imageRef: e, clickImageRef: g, imageChange: o };
}
function U(e) {
    return new URL(
        {
            '../assets/images/cat.png': c,
            '../assets/images/Mountain.png': u,
            '../assets/images/self.png': f,
            '../assets/images/trees.png': m
        }[`../assets/images/${e}.png`],
        self.location
    ).href;
}
export { U as a, v as u };

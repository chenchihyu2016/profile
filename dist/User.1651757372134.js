var P = Object.defineProperty;
var A = (e, t, d) =>
    t in e
        ? P(e, t, { enumerable: !0, configurable: !0, writable: !0, value: d })
        : (e[t] = d);
var f = (e, t, d) => (A(e, typeof t != 'symbol' ? t + '' : t, d), d);
import {
    d as $,
    u as M,
    _ as k,
    o as n,
    c as i,
    a,
    b as D,
    w as E,
    e as b,
    t as o,
    T as S,
    F as u,
    r as v,
    f as h,
    g as L,
    h as N,
    i as z,
    z as j,
    j as B,
    k as q,
    s as W,
    l as y,
    m as F,
    n as V,
    p as I,
    q as H,
    v as K,
    x as Y
} from './index.1651757372134.js';
import { u as R } from './image.1651757372134.js';
const G = $({
        props: {
            data: { type: Object, required: !0 },
            store: { type: Object, required: !0 }
        },
        setup() {
            const { imageRef: e, clickImageRef: t, imageChange: d } = R(),
                { t: c } = M();
            return {
                rightData: ['id', 'name', 'username', 'phone'],
                imageRef: e,
                t: c,
                clickImageRef: t,
                imageChange: d
            };
        }
    }),
    J = { class: 'wrapper' },
    Q = { class: 'image_container' },
    X = ['src'],
    Z = { class: 'right_data_container' },
    x = { class: 'data_name' },
    ee = { class: 'data_value' },
    ae = { class: 'bottom_data_container' },
    se = { class: 'data_item' },
    te = { class: 'data_name' },
    oe = { class: 'data_value' },
    ne = { class: 'data_item' },
    de = { class: 'data_name' },
    ie = { class: 'data_value' },
    le = { class: 'data_item' },
    ce = { class: 'data_name' },
    re = { class: 'data_value' },
    _e = { class: 'data_item' },
    me = { class: 'data_name' },
    ue = { class: 'data_value' },
    ve = { class: 'button_container' };
function pe(e, t, d, c, r, _) {
    return (
        n(),
        i('div', J, [
            a(
                'input',
                {
                    type: 'file',
                    ref: 'imageRef',
                    accept: 'image/*',
                    onChange:
                        t[0] ||
                        (t[0] = (...s) => e.imageChange && e.imageChange(...s))
                },
                null,
                544
            ),
            a('div', Q, [
                D(
                    S,
                    { name: 'fade', mode: 'out-in' },
                    {
                        default: E(() => [
                            e.data.image
                                ? (n(),
                                  i(
                                      'img',
                                      {
                                          src: e.data.image,
                                          key: e.data.id,
                                          class: 'image',
                                          onClick:
                                              t[1] ||
                                              (t[1] = (s) =>
                                                  e.clickImageRef(e.data.id))
                                      },
                                      null,
                                      8,
                                      X
                                  ))
                                : (n(),
                                  i(
                                      'div',
                                      {
                                          key: 1,
                                          class: 'image',
                                          onClick:
                                              t[2] ||
                                              (t[2] = b(
                                                  (s) =>
                                                      e.clickImageRef(
                                                          e.data.id
                                                      ),
                                                  ['self']
                                              ))
                                      },
                                      o(e.t('CLICK_TO_UPDATE_PHOTO')),
                                      1
                                  ))
                        ]),
                        _: 1
                    }
                )
            ]),
            a('div', Z, [
                (n(!0),
                i(
                    u,
                    null,
                    v(
                        e.rightData,
                        (s, l) => (
                            n(),
                            i('div', { class: 'data_item', key: l }, [
                                a('div', x, o(e.t(s.toUpperCase())), 1),
                                a('div', ee, o(e.data[s]), 1)
                            ])
                        )
                    ),
                    128
                ))
            ]),
            a('div', ae, [
                a('div', se, [
                    a('div', te, o(e.t('EMAIL')), 1),
                    a('div', oe, o(e.data.email), 1)
                ]),
                a('div', ne, [
                    a('div', de, o(e.t('WEBSITE')), 1),
                    a('div', ie, o(e.data.website), 1)
                ]),
                a('div', le, [
                    a('div', ce, o(e.t('ADDRESS')), 1),
                    a(
                        'div',
                        re,
                        o(e.data.address.city) +
                            ', ' +
                            o(e.data.address.street) +
                            ', ' +
                            o(e.data.address.suite) +
                            ', ' +
                            o(e.data.address.zipcode),
                        1
                    )
                ]),
                a('div', _e, [
                    a('div', me, o(e.t('COMPANY')), 1),
                    a('div', ue, o(e.data.company.name), 1)
                ])
            ]),
            a('div', ve, [
                a(
                    'button',
                    {
                        class: 'success',
                        onClick:
                            t[3] ||
                            (t[3] = b((s) => e.$emit('destroy'), ['self']))
                    },
                    o(e.t('CLOSE')),
                    1
                )
            ])
        ])
    );
}
var he = k(G, [
    ['render', pe],
    ['__scopeId', 'data-v-762a95ea']
]);
const ge = $({
        props: {
            modals: { type: Object },
            store: { type: Object },
            destroyModals: { type: Function }
        },
        components: { MUserDetail: he },
        setup(e) {
            const t = e.modals,
                d = e.store,
                c = e.destroyModals,
                r = h(t);
            function _(s) {
                const l = r.value.findIndex((m) => m.id === s);
                r.value.splice(l, 1), r.value.length === 0 && c();
            }
            return { modals: r, storeProp: d, destroy: _ };
        }
    }),
    fe = { class: 'modal_backdrop' };
function ye(e, t, d, c, r, _) {
    return (
        n(),
        i('div', fe, [
            (n(!0),
            i(
                u,
                null,
                v(
                    e.modals,
                    (s) => (
                        n(),
                        L(
                            N(s.modalName),
                            {
                                store: e.storeProp,
                                data: s.data,
                                key: s.id,
                                class: 'component',
                                onDestroy: (l) => e.destroy(s.id),
                                onCallback: s.callback
                            },
                            null,
                            8,
                            ['store', 'data', 'onDestroy', 'onCallback']
                        )
                    )
                ),
                128
            ))
        ])
    );
}
var $e = k(ge, [
    ['render', ye],
    ['__scopeId', 'data-v-be911d36']
]);
class ke {
    constructor() {
        f(this, 'modals');
        f(this, 'app');
        (this.modals = h([])), (this.app = null);
    }
    userDetail(t, d) {
        const c = 'MUserDetail';
        this.create(t, c, d);
    }
    create(t, d, c) {
        var l;
        const _ = {
                id: new Date().getTime(),
                data: t,
                callback: c,
                modalName: d
            },
            s = z({
                legacy: !1,
                locale:
                    (l = localStorage.getItem('locale')) != null ? l : 'zh-TW',
                fallbackLocale: 'zh-TW',
                messages: { 'zh-TW': j, 'en-US': B }
            });
        if ((this.modals.value.push(_), this.modals.value.length === 1)) {
            const m = this.modals,
                p = document.createElement('div'),
                g = this.destroyModals.bind(this);
            (this.app = q($e, { modals: m, store: W, destroyModals: g })),
                this.app.use(s),
                (p.id = 'modalElement'),
                document.body.appendChild(p),
                this.app.mount(p);
        }
    }
    destroyModals() {
        const t = document.body.querySelector('#modalElement');
        this.app.unmount(), document.body.removeChild(t);
    }
}
var Ce = new ke();
const be = $({
        setup() {
            const e = h(!0),
                t = h(),
                d = y(() => m.isMobile),
                c = y(() => p['data/getUsers']),
                r = y(() =>
                    d.value
                        ? ['id', 'name']
                        : [
                              'id',
                              'name',
                              'username',
                              'email',
                              'phone',
                              'website'
                          ]
                ),
                { imageRef: _, clickImageRef: s, imageChange: l } = R(),
                { state: m, getters: p, dispatch: g } = F(),
                { setScrollTarget: T } = H(),
                { t: O } = M();
            V(async () => {
                await g('data/getUsers'),
                    T(t.value),
                    setTimeout(() => {
                        e.value = !1;
                    }, 750);
            });
            function U(w) {
                Ce.userDetail(w);
            }
            return {
                users: c,
                loading: e,
                itemList: r,
                imageRef: _,
                isMobile: d,
                elementContainerRef: t,
                t: O,
                clickImageRef: s,
                imageChange: l,
                userDetail: U
            };
        }
    }),
    C = (e) => (K('data-v-3a00fc94'), (e = e()), Y(), e),
    Ie = { class: 'element_container', ref: 'elementContainerRef' },
    Me = { class: 'image_container' },
    De = ['src', 'onClick'],
    Ee = ['onClick'],
    Se = { class: 'data_container' },
    Re = { class: 'data_name' },
    Te = { class: 'data_value' },
    Oe = { key: 0, class: 'data_item' },
    Ue = { class: 'data_name' },
    we = { class: 'data_value' },
    Pe = { key: 1, class: 'data_item' },
    Ae = { class: 'data_name' },
    Le = { class: 'data_value' },
    Ne = ['onClick'],
    ze = C(() =>
        a(
            'div',
            { class: 'image_container' },
            [a('div', { class: 'image_skeleton' })],
            -1
        )
    ),
    je = { class: 'data_container' },
    Be = C(() => a('div', { class: 'data_name_skeleton' }, null, -1)),
    qe = C(() => a('div', { class: 'data_value' }, null, -1)),
    We = [Be, qe];
function Fe(e, t, d, c, r, _) {
    return (
        n(),
        i(
            'div',
            Ie,
            [
                e.loading
                    ? (n(),
                      i(
                          u,
                          { key: 1 },
                          v(5, (s) =>
                              a('div', { class: 'element', key: s }, [
                                  ze,
                                  a('div', je, [
                                      (n(),
                                      i(
                                          u,
                                          null,
                                          v(9, (l) =>
                                              a(
                                                  'div',
                                                  {
                                                      class: 'data_item',
                                                      key: l
                                                  },
                                                  We
                                              )
                                          ),
                                          64
                                      ))
                                  ])
                              ])
                          ),
                          64
                      ))
                    : (n(),
                      i(
                          u,
                          { key: 0 },
                          [
                              a(
                                  'input',
                                  {
                                      type: 'file',
                                      ref: 'imageRef',
                                      accept: 'image/*',
                                      onChange:
                                          t[0] ||
                                          (t[0] = (...s) =>
                                              e.imageChange &&
                                              e.imageChange(...s))
                                  },
                                  null,
                                  544
                              ),
                              (n(!0),
                              i(
                                  u,
                                  null,
                                  v(
                                      e.users,
                                      (s) => (
                                          n(),
                                          i(
                                              'div',
                                              { class: 'element', key: s.id },
                                              [
                                                  a('div', Me, [
                                                      D(
                                                          S,
                                                          {
                                                              name: 'fade',
                                                              mode: 'out-in'
                                                          },
                                                          {
                                                              default: E(() => [
                                                                  s.image
                                                                      ? (n(),
                                                                        i(
                                                                            'img',
                                                                            {
                                                                                src: s.image,
                                                                                key: s.image,
                                                                                class: 'image',
                                                                                onClick:
                                                                                    (
                                                                                        l
                                                                                    ) =>
                                                                                        e.clickImageRef(
                                                                                            s.id
                                                                                        )
                                                                            },
                                                                            null,
                                                                            8,
                                                                            De
                                                                        ))
                                                                      : (n(),
                                                                        i(
                                                                            'div',
                                                                            {
                                                                                key: 1,
                                                                                class: 'image',
                                                                                onClick:
                                                                                    (
                                                                                        l
                                                                                    ) =>
                                                                                        e.clickImageRef(
                                                                                            s.id
                                                                                        )
                                                                            },
                                                                            o(
                                                                                e.t(
                                                                                    'CLICK_TO_UPDATE_PHOTO'
                                                                                )
                                                                            ),
                                                                            9,
                                                                            Ee
                                                                        ))
                                                              ]),
                                                              _: 2
                                                          },
                                                          1024
                                                      )
                                                  ]),
                                                  a('div', Se, [
                                                      (n(!0),
                                                      i(
                                                          u,
                                                          null,
                                                          v(
                                                              e.itemList,
                                                              (l, m) => (
                                                                  n(),
                                                                  i(
                                                                      'div',
                                                                      {
                                                                          class: 'data_item',
                                                                          key: m
                                                                      },
                                                                      [
                                                                          a(
                                                                              'div',
                                                                              Re,
                                                                              o(
                                                                                  e.t(
                                                                                      l.toUpperCase()
                                                                                  )
                                                                              ),
                                                                              1
                                                                          ),
                                                                          a(
                                                                              'div',
                                                                              Te,
                                                                              o(
                                                                                  s[
                                                                                      l
                                                                                  ]
                                                                              ),
                                                                              1
                                                                          )
                                                                      ]
                                                                  )
                                                              )
                                                          ),
                                                          128
                                                      )),
                                                      e.isMobile
                                                          ? I('', !0)
                                                          : (n(),
                                                            i('div', Oe, [
                                                                a(
                                                                    'div',
                                                                    Ue,
                                                                    o(
                                                                        e.t(
                                                                            'COMPANY'
                                                                        )
                                                                    ),
                                                                    1
                                                                ),
                                                                a(
                                                                    'div',
                                                                    we,
                                                                    o(
                                                                        s
                                                                            .company
                                                                            .name
                                                                    ),
                                                                    1
                                                                )
                                                            ])),
                                                      e.isMobile
                                                          ? I('', !0)
                                                          : (n(),
                                                            i('div', Pe, [
                                                                a(
                                                                    'div',
                                                                    Ae,
                                                                    o(
                                                                        e.t(
                                                                            'ADDRESS'
                                                                        )
                                                                    ),
                                                                    1
                                                                ),
                                                                a(
                                                                    'div',
                                                                    Le,
                                                                    o(
                                                                        s
                                                                            .address
                                                                            .city
                                                                    ) +
                                                                        ', ' +
                                                                        o(
                                                                            s
                                                                                .address
                                                                                .street
                                                                        ),
                                                                    1
                                                                )
                                                            ])),
                                                      a(
                                                          'div',
                                                          {
                                                              class: 'data_item clickable',
                                                              onClick: (l) =>
                                                                  e.userDetail(
                                                                      s
                                                                  )
                                                          },
                                                          o(e.t('SEE_MORE')),
                                                          9,
                                                          Ne
                                                      )
                                                  ])
                                              ]
                                          )
                                      )
                                  ),
                                  128
                              ))
                          ],
                          64
                      ))
            ],
            512
        )
    );
}
var Ye = k(be, [
    ['render', Fe],
    ['__scopeId', 'data-v-3a00fc94']
]);
export { Ye as default };

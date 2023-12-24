import {aboutLocale} from "./loc/about";
import {partnerLocale} from "./loc/about";
import {teamLocale} from "./loc/about"
import {globalLocale} from "./loc/global";
import {profileLocale} from "./loc/profile";
import {productGDLocale} from "./loc/product/gd";
import {productMCLocale} from "./loc/product/mc";
import {indexLocale} from "./loc";
import {orderGDPSLocale} from "./loc/order/gd";
import {storeLocale} from "./loc/manage/store";
import {gdManageLocale} from "./loc/manage/gd.js";
import {gdpsUserManageLocale} from "./loc/userzone/gdps.js";
import {topLocale} from "./loc/top";

const translationList = {
    ...aboutLocale,
    ...partnerLocale,
    ...teamLocale,
    ...profileLocale,
    ...productGDLocale,
    ...productMCLocale,
    ...indexLocale,
    ...orderGDPSLocale,
    ...storeLocale,

    ...gdManageLocale,

    ...gdpsUserManageLocale,

    ...topLocale
}

export default function useLocale(router) {
    let ts = translationList[router.pathname]

    return {
        locale: router.locale,
        path: router.pathname,
        translations: ts===undefined?{}:ts,

        get: listGet
    }
}

export function useGlobalLocale(router) {
    return {
        locale: router.locale,
        path: router.pathname,
        translations: globalLocale,

        get: listGet
    }
}

function listGet(val) {
    let ts = this.translations[val]
    if (ts===undefined) return "???"
    ts = ts[this.locale]
    return ts===undefined?"???":ts
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 2;
}
// preferred method
function provideId(id) {
    if (!id) {
        console.log('Please provide a id');
        return;
    }
    return id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}

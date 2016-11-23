exports.getXpVersion = function () {
    return Java.type("com.enonic.starter.admintool.XpVersionSupplier").get();
}
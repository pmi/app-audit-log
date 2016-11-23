package com.enonic.starter.admintool;

import com.enonic.xp.server.VersionInfo;

public class VersionSupplier
{
    public static String get()
    {
        final VersionInfo versionInfo = VersionInfo.get();
        return versionInfo.isSnapshot() ? Long.toString( System.currentTimeMillis() ) : versionInfo.getVersion();
    }
}

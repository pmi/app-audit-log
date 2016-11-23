package com.enonic.starter.admintool;

import com.enonic.xp.server.VersionInfo;

public class VersionInfoSupplier
{
    public static String get()
    {
        return VersionInfo.get().getVersion();
    }
}

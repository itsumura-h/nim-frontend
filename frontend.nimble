# Package

version       = "0.1.0"
author        = "itsumura-h"
description   = "A new awesome nimble package"
license       = "MIT"
srcDir        = "src"
installExt    = @["nim"]
bin           = @["frontend"]


# Dependencies

requires "nim >= 1.6.6"
requires "cligen >= 1.5.24"

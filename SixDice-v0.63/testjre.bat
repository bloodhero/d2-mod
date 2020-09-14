@echo off
javaw -help
if %errorlevel%==1 goto nojre
echo Your JRE seems to be working fine.
echo I will now attempt to display your Java version:
echo.
java -version
echo.
echo If this displays version 1.5.0 or higher, the JRE should be capable of
echo running SixDice.
goto end
:nojre
echo I couldn't find a JRE.  This doesn't necessarily mean that you don't
echo have one installed but, if you're having trouble, it's likely.  Try
echo downloading a new JRE.
goto end
:end
pause

************* FOREWARD **************

As with any piece of free or experimental software, you are strongly encouraged to make regular backups of any data you consider important.  I wrote this software for my own use and I wouldn't be distributing it if I didn't think it was safe; however, bugs invariably escape the testing process and it is possible (unlikely, but possible) that a bug in this software could damage your data.  If something like this happens, feel free to let me know; however, prudent data backups are always advisable.

************ WHAT IS IT? ************

This program is designed to function as an animation file editor, specifically for the animations used in Diablo II and Diablo II mods.  It has the following notable features:

	* SixDice is capable of reading and writing both the DC6 and DCC file formats.
	* SixDice uses the Java imaging API for image I/O.  This means that a user can install additional Java components (like JAI) to make SixDice capable of reading more image formats (such as PCX, TIFF, etc.).  SixDice comes with a built-in PCX reader.
	* SixDice is capable of preventing mapping to transparent colors during file conversion.  For example, if the transparent color is black (RGB 0,0,0) such as it is in Diablo II, SixDice will by default avoid converting similar colors (such as RGB 1,1,1) to the transparent color.  This prevents a common mistake in animation conversion: having pixels which should appear black appearing as transparent in the animation file instead.
	* SixDice has both GUI and command-line batch conversion control.  A user can instruct SixDice to convert an entire directory tree either from or to supported animation formats.  Additionally, this can occur without use of the GUI.
	* SixDice supports splitting of images into multiple frames.  Diablo II uses this technique to store large images (though goodness knows why - the DC6 file format is capable of handling frames much larger than that).

********** HOW DO I USE IT? *********

SixDice is written using the programming language Java and thus requires a JRE (Java Runtime Environment).  If you are a Windows user and are unsure if you have a JRE installed on your computer, try executing the "testjre.bat" file contained within this archive.

If you do not have a JRE installed, you can download an appropriate JRE at the following link:
	http://java.sun.com/j2se/1.5.0/download.jsp
As of 2004-July-08, click on the "Download JRE etc. etc." link under the third heading.  What you want is a JRE of at least v1.5 (also called JRE 5.0).  Install that software and then run SixDice by double-clicking the SixDice.jar file or running the following from your command line:
	java -jar SixDice.jar

** IF IT DOESN'T SEEM TO BE WORKING **

The simplest way to fix all of most problems is simply to install or reinstall the JRE as described above.

An archiving program, such as WinRAR or WinZIP, may rudely have changed your file associations for JAR.  If you open the JAR and get an archiver instead of SixDice, you may be able to fix the problem by rewriting the file association for JAR files.  While I don't wish to go into a lengthy description of Windows file extension associations here, I can say that the default file association for JAR files should look something like this:
			c:\jre1.5.0_03\bin\javaw.exe" -jar "%1" %*

If you get nothing at all (no error message, no window, etc.), your JRE may be out of date.  If this is the case, you need to reinstall anyway.

***** NO, REALLY... IT'S BROKEN *****

I'm more than happy to entertain bug reports.  Send them to zep_sixdice@bahj.com.  The more detailed the description of the bug, the more likely I'll be able to fix it.  E-mails stating "it broke" are less likely to produce results than e-mails containing a description of what you were doing at the time and what error message you received.  :)  I'll also entertain feature requests; feel free to be extravagant.  ;)

*************** NOTES ***************

SixDice is the property of its author, Zachary E. Palmer.  Use and distribution are regulated through the LICENSE.txt file which should appear with this text file.

************** THANKS! **************

I'd like to thank you for trying out this software.  I put a fair amount of effort into it to tailor it to my specific Diablo II modding needs and I'll be quite happy if someone else gets some use out of it as well.  Best of luck to you.  :)
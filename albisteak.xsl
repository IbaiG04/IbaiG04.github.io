<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="albisteak">

        <html lang="en">

            <head>
                <link rel="stylesheet" href="../style.css" />
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Berriak</title>
                <link rel="shortcut icon" href="../media/logosinfondo.png" type="image/x-icon" />

                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </head>

            <body>

                <h2 id="h2guztiak">Berriak</h2>

                <xsl:for-each select="albistea">

                    <main class="berriguztiak">

                        <div class="news-item animate__animated animate__bounceInLeft">
                            <img>
                                <xsl:attribute name="src">
                                    <xsl:value-of select="linkimg" />
                                </xsl:attribute>
                                <xsl:attribute name="height"> 200 </xsl:attribute>
                                <xsl:attribute name="width"> 150 </xsl:attribute>
                            </img>
                            <div class="derecha">
                                <h3>
                                    <xsl:value-of select="izenburua" />
                                </h3>
                                <p>
                                    <xsl:value-of select="edukia" />
                                </p>

                                <div class="date">
                                    <xsl:value-of select="data" />
                                </div>
                                <div class="date">
                                    <xsl:value-of select="idazlea" />
                                </div>
                            </div>
                        </div>
                    </main>
                </xsl:for-each>

            </body>

        </html>
    </xsl:template>
</xsl:stylesheet>
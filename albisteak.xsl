<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
            <xsl:for-each select="berriak/albistea">
                <div>
                    <div><xsl:value-of select="container"/></div>
                    <h3><xsl:value-of select="izenburua"/></h3>
                    <p><xsl:value-of select="edukia"/></p>
                    <img><xsl:value-of select="linkimg"/></img>
                    <div><xsl:value-of select="data"/></div>
                    <div><xsl:value-of select="idazlea"/></div>
                </div>
            </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
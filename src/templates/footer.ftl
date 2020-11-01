<#---
  @namespace footer
-->
<#macro wrapper>
  <#compress>
    <div class="footer-wrapper">
      <div class="page-width">
        <footer class="footer" role="contentinfo">
          <#nested />
        </footer>
      </div>
    </div>
  </#compress>
</#macro>

<#macro copyright>
  <#compress>
    <p class="copyright"><#t />
      © ${pp.now?string('YYYY')} Copyright ${site.copyright}<#t />
    </p>
  </#compress>
</#macro>

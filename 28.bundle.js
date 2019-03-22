(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{320:function(n,a,s){"use strict";s.r(a),a.default='<h2 id="description">Description<a href="#description" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This package contains the logic to migrate a project from one version to the other.</p>\n<h2 id="installation">Installation<a href="#installation" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> i -D webpack-cli @webpack-cli/migrate</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To run the package programmatically, install it as a dependency. When using the package programmatically, one does not have to install webpack-cli.</p>\n<h3 id="node">Node<a href="#node" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> migrate <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@webpack-cli/migrate\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">;</span>\n\n<span class="token comment">// add null to mock process.env</span>\n<span class="token function">migrate</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> inputPath<span class="token punctuation">,</span> outputPath<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="cli-via-webpack-cli">CLI (via webpack-cli)<a href="#cli-via-webpack-cli" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-bash">npx webpack-cli migrate</code></pre>\n'}}]);
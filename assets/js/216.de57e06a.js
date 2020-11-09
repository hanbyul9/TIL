(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{455:function(t,n,e){"use strict";e.r(n);var s=e(42),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"파이썬-개발환경-세팅하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#파이썬-개발환경-세팅하기"}},[t._v("#")]),t._v(" 파이썬 개발환경 세팅하기")]),t._v(" "),e("h2",{attrs:{id:"개괄"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#개괄"}},[t._v("#")]),t._v(" 개괄")]),t._v(" "),e("p",[t._v("수많은 프로젝트와, 그 프로젝트 별 버전관리 그리고 패키지들의 의존성 관리를 위해\n"),e("code",[t._v("pyenv")]),t._v("와 "),e("code",[t._v("virtualenv")]),t._v(", 그리고 "),e("code",[t._v("autoenv")]),t._v("를 설치한다.")]),t._v(" "),e("ul",[e("li",[t._v("pyenv: 로컬에 다양한 파이썬 버전 설치")]),t._v(" "),e("li",[t._v("virtualenv: 로컬에 다양한 파이썬 환경 구축. 패키지 의존성 해결")]),t._v(" "),e("li",[t._v("autoenv: 프로젝트 폴더 들어갈때마다 자동으로 개발환경 세팅됨.\n"),e("a",{attrs:{href:"https://dobest.io/how-to-set-python-dev-env/",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고 링크"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"pyenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pyenv"}},[t._v("#")]),t._v(" pyenv")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("brew update\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pyenv\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bash_profile에 추가. 나는 zsh라 ~/.zshrc에 추가하였다.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eval \""),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("pyenv init -"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\"'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bash_profile  \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pyenv 사용하기. 현재 설치한 버전들이 다 나온다.")]),t._v("\npyenv version\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#설치할 수 있는 파이썬 리스트를 보여주고, 거기서 골라서 설치")]),t._v("\npyenv "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -list\npyenv "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.7")]),t._v(".10\npython -version "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#버전확인")]),t._v("\npyenv global "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.7")]),t._v(".10 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#설치한 파이썬 버전 사용")]),t._v("\n")])])]),e("h3",{attrs:{id:"build-failed-error-the-python-zlib-extension-was-not-compiled-missing-the-zlib-이-뜬다면"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-failed-error-the-python-zlib-extension-was-not-compiled-missing-the-zlib-이-뜬다면"}},[t._v("#")]),t._v(' Build failed: "ERROR: The Python zlib extension was not compiled. Missing the zlib?" 이 뜬다면')]),t._v(" "),e("p",[t._v("xcode command line tools를 설치한다. "),e("a",{attrs:{href:"https://developer.apple.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("링크"),e("OutboundLink")],1),t._v("\n그래도 안되면 "),e("a",{attrs:{href:"https://github.com/yyuu/pyenv/wiki/Common-build-problems#build-failed-error-the-python-zlib-extension-was-not-compiled-missing-the-zlib",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),e("OutboundLink")],1),t._v(" 참고")]),t._v(" "),e("h2",{attrs:{id:"virtualenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv"}},[t._v("#")]),t._v(" virtualenv")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pyenv-virtualenv\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pyenv init 안했으면 위에것도 bash_profile이나 zshrc에 추가해준다. ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("pyenv init -"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("eval")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("pyenv virtualenv-init -"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.7.10을 사용한 pinkfong-tv라는 프로젝트 만들기")]),t._v("\npyenv virtualenv "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.7")]),t._v(".10 pinkfong-tv\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 만든 이름으로 activate하기")]),t._v("\npyenv activate pinkfong-tv\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install된 패키지들을 보여주거나 파일로 저장")]),t._v("\npip freeze \npip freeze "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" requirement.txt \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 새로운 환경에서 패키지들을 재설치")]),t._v("\npip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -r requirement.txt\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# django 설치하기")]),t._v("\npip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" django\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pip upgrade")]),t._v("\npip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deactivate하기")]),t._v("\npyenv deactivate\n")])])]),e("h2",{attrs:{id:"the-django-admin-command-exists-in-these-python-versions-란-에러가-나면"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-django-admin-command-exists-in-these-python-versions-란-에러가-나면"}},[t._v("#")]),t._v(" The `django-admin' command exists in these Python versions: 란 에러가 나면?")]),t._v(" "),e("p",[t._v("이렇게 하면 된다. "),e("a",{attrs:{href:"https://stackoverflow.com/questions/36356778/how-to-let-pyenv-to-find-installed-python-versions",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("pyenv global "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.7")]),t._v(".10\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pyenv’s name for the Python 2.7.10 interpreter version is just 2.7.10, not ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# python2.7.10. You can get a list of all your installed versions with:")]),t._v("\npyenv versions\n")])])]),e("h2",{attrs:{id:"autoenv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autoenv"}},[t._v("#")]),t._v(" autoenv")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" autoenv\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zshrc에 매 세션마다 autoenv자동실행 코드 삽입")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source /usr/local/opt/autoenv/activate.sh'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshrc\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 프로젝트 폴더로 들어가서, .env파일 만들기")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" .env\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .env에는 activate하고 싶은 virtualenv명을 적는다.")]),t._v("\npyenv activate pinkfong-tv\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 이건 깃에 올릴 필요가 없으니, global gitignore을 만든다")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ~/.gitignore\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.excludesfile ~/.gitignore\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" ~/.gitignore\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .gitignore에 제외하고 싶은 .env를 써준다.")]),t._v("\n.env\n")])])]),e("h2",{attrs:{id:"refer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refer"}},[t._v("#")]),t._v(" Refer")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://dobest.io/how-to-set-python-dev-env/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyenv + virtualenv + autoenv 를 통한 Python 개발 환경 구축하기 by @dobestan"),e("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=a.exports}}]);
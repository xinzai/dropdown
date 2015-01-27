class Dropdown extends SimpleModule

  opts:
    el:""
    defaults:""
    content:[]

  tpl: """
    <div class="simple-dropdown">
      <div class="dropdown-main">
        <span></span>
        <div class="arrow"></div>
      </div>
      <div class="dropdown-content"><ul></ul></div>
    </div>
  """

  _init: ()->
    @target = $(@opts.el)
    if @opts.default == ""
      throw "Default cannot be empty!"

    if @opts.content.length == 0
      throw "content cannot be empty!" 

    alert "123"
    @_render()

  _render: ()->
    @el = $(@tpl)
    @target.append(@tpl)
    @el.find("span").html(@opts.defaults)

    $.each(@opts.content,(val) ->
      @el.find("ul").append("<li>" + val + "</li>")
      )

    @el.find("dropdown-main").focus(()->
      @el.find("dropdown-content").show();
      )

    @el.find("dropdown-main").blur(()->
      @el.find("dropdown-content").hide();
      )

dropdown = (opts)->
  new Dropdown(opts)
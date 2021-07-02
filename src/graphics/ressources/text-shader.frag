#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec4 text_color;
layout(location=0) out vec4 f_color;

layout(set = 1, binding = 0) uniform texture2D t_diffuse;
layout(set = 1, binding = 1) uniform sampler s_diffuse;

void main() {
    vec4 p_color = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);
    f_color = text_color * vec4(1.0, 1.0, 1.0, p_color.r);
}

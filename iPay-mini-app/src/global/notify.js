import Vue from 'vue';
import NotifyGlobal from './notify.vue';

function notify() {
    const Notify = Vue.extend(NotifyGlobal);

    const parentId = 'sv-notify';

    let global;
    let id = 1;

    const _notify = function (option) {
        if (!option) return false;

        global = new Notify({
            data: {
                type: option.type || 'info',
                content: option.content || '',
                duration: option.duration || 3000
            }
        });

        global.id = parentId + id++;
        global.vm = global.$mount();

        let parent = document.getElementById(parentId);

        if (!parent) {
            parent = document.createElement('div');
            parent.id = parentId;

            document.body.appendChild(parent);
        }

        parent.appendChild(global.vm.$el);

        return global.vm;
    };

    ['success', 'info', 'error', 'warning'].forEach(prop => {
        _notify[prop] = function (content, duration) {
            return _notify({
                type: prop,
                content: content,
                duration: duration || 3000
            });
        }
    });

    return _notify;
}

export default notify();
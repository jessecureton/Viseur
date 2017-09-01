// These are the interfaces for all the states in this game
<%include file="functions.noCreer" />import { IBaseGameObjectState, IBaseGameState, IBasePlayerState } from "src/viseur/game";

// This is a file generated by the Creer, it may have empty interfaces,
// but we need them, so let's disable that tslint rule
// tslint:disable:no-empty-interface

% for game_obj_name in (['Game'] + game_obj_names):
<%

game_obj = None
if game_obj_name == 'Game':
    game_obj = game
else:
    game_obj = game_objs[game_obj_name]

parent_classes = []
for p in game_obj['parentClasses']:
    parent_classes.append('I' + p + 'State')

if game_obj_name == 'Player':
    parent_classes.append('IBasePlayerState')
elif game_obj_name == 'GameObject':
    parent_classes.append('IBaseGameObjectState')
elif game_obj_name == 'Game':
    parent_classes.append('IBaseGameState')

%>
${shared['vis']['block_comment']('', game_obj['description'])}
export interface I${game_obj_name}State extends ${', '.join(parent_classes)} {
% for attr_name in game_obj['attribute_names']:
<%
    attrs = game_obj['attributes'][attr_name]
    #if 'serverPredefined' in attrs and attrs['serverPredefined']:
    #    continue
%>${shared['vis']['block_comment']('    ', attrs['description'])}
    ${attr_name}: ${shared['vis']['type'](attrs['type'])};

% endfor
}

% endfor